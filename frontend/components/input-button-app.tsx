import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface InputWithButtonProps {
    description: string;
}

export function InputWithButton({ description}: InputWithButtonProps ) {
  return (
    <div className="flex w-full max-w-xs lg:max-w-lg items-center space-x-2">
      <Input
      type="text"
      placeholder={description}
      className="flex-1 border-black border-2"
      />
      <Button type="submit">Convert</Button>
    </div>
  )
}
