"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { useState } from "react";

interface InputWithButtonProps {
    description: string;
}

export function InputWithButton({ description}: InputWithButtonProps ) {
  const [URL, setURL] = useState("")

  return (
    <div className="flex w-full max-w-xs lg:max-w-lg items-center my-4 space-x-2">
      <Input
      type="text"
      placeholder={description}
      value={URL}
      onChange={(e) => setURL(e.target.value)}
      className="flex-1 border-black border-2 bg-orange-50"
      />

      <Link
      href={
        {
          pathname : "/convert",
          query : {
            "URL" : URL
          }
        }
      }>
        <Button type="submit">Convert</Button>
      </Link>
    </div>
  )
}
