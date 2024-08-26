import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CheckoutModal = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Thank you for your order!</DialogTitle>
          <DialogDescription>
            Your spices are on their way to flavor up your dishes!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary p-3">
              <Phone className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Call us for order details
              </p>
              <p className="text-sm text-muted-foreground">
                📞 0910717182 | 0928769996|
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Please call us on the number above for any questions about your
            order or to receive exciting offers on our spice collections!
          </p>
        </div>
        <Button onClick={() => onOpenChange(false)}>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
