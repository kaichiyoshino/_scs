import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  content: z
    .string()
    .max(150, { message: "Content must be at most 150 characters long" }),
});

const QuestionForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<Boolean>(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      content: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const { username, content } = data;
    await fetch("http://localhost:3000/api/linenotify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, content }),
    });
    setIsSubmitting(true);
  }

  useEffect(() => {
    if (isSubmitting) {
      alert("送信しました");
      form.reset();
      setIsSubmitting(false);
    }
  }, [isSubmitting]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>お名前</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>お問合せ内容</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">送信</Button>
      </form>
    </Form>
  );
};

export default QuestionForm;
