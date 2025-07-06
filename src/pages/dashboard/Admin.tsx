import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Admin() {
  // return <div>Admin</div>;

  return (
    <div>
      <Button
        onClick={() => {
          toast("Hi!!");
        }}
      >
        Click Me
      </Button>
      <Button
        onClick={() => {
          toast.error("Oops!");
        }}
      >
        Error
      </Button>
      <Button
        onClick={() => {
          toast.success("Yay!!");
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          toast.warning("Wait!");
        }}
      >
        Warning
      </Button>
    </div>
  );
}
