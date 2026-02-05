import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface PinGateProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const MANAGEMENT_PIN = "655108";

const PinGate = ({ open, onOpenChange, onSuccess }: PinGateProps) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (pin === MANAGEMENT_PIN) {
      setError(false);
      setPin("");
      onSuccess();
      onOpenChange(false);
    } else {
      setError(true);
      setPin("");
    }
  };

  const handlePinChange = (value: string) => {
    setPin(value);
    setError(false);
    if (value.length === 6) {
      if (value === MANAGEMENT_PIN) {
        setPin("");
        onSuccess();
        onOpenChange(false);
      } else {
        setError(true);
        setPin("");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <Lock className="w-5 h-5 text-foreground" />
            </div>
            <DialogTitle className="text-xl">Platform Management</DialogTitle>
          </div>
          <DialogDescription>
            Enter the 6-digit PIN to access the management portal.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-4">
          <InputOTP
            maxLength={6}
            value={pin}
            onChange={handlePinChange}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          {error && (
            <p className="text-sm text-destructive">
              Incorrect PIN. Please try again.
            </p>
          )}

          <Button onClick={handleSubmit} className="w-full" disabled={pin.length < 6}>
            Verify Access
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PinGate;
