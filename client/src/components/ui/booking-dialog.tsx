import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry, type Bike } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedBike: Bike | null;
}

export function BookingDialog({ open, onOpenChange, selectedBike }: BookingDialogProps) {
  const { mutate, isPending } = useCreateInquiry();
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      bikeId: selectedBike?.id || undefined,
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    // Ensure bikeId is set if passed from props
    const payload = selectedBike ? { ...data, bikeId: selectedBike.id } : data;
    mutate(payload, {
      onSuccess: () => {
        form.reset();
        onOpenChange(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-zinc-950 border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-primary">
            {selectedBike ? `Book ${selectedBike.name}` : "Book a Ride"}
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Fill out the form below and we'll contact you to confirm availability.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-300">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      className="bg-white/5 border-white/10 text-white focus:border-primary/50" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-300">Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="bg-white/5 border-white/10 text-white focus:border-primary/50" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-300">Phone</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+91 98765 43210" 
                        className="bg-white/5 border-white/10 text-white focus:border-primary/50" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-300">Message (Dates, Requirements)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="I'd like to rent this for 3 days starting..." 
                      className="bg-white/5 border-white/10 text-white focus:border-primary/50 min-h-[100px]" 
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-primary text-black hover:bg-primary/90 font-bold"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit Inquiry"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
