"use client";
import { useState } from "react";
import { useAction } from "@/util";
import { filterUsers } from "./actions";
import TextInput from "@/ui/text-input";

export default function Home() {
  return Array(100)
    .fill(0)
    .map((_, i) => <p key={i}>{i}</p>);
}
