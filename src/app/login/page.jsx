"use client";

import { Card, toast } from "@heroui/react";
import React from "react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
    });

    if (data) {
      redirect("/");
    }
  };

  return (
    <div className="max-w-7xl mx-auto justify-center ">
      <div className="text-center my-3">
        <h1 className="text-3xl font-bold mb-4">Log in to Your Account</h1>
        <p className="text-gray-600">Start your adventure with Wanderlust</p>
      </div>
      <Card className=" p-6 border border-gray-300 rounded-lg shadow-md">
        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center gap-2">
            <Button
              type="submit"
              className="rounded-none w-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center"
              onPress={() =>
                toast("You have been signed up successfully!", {
                  actionProps: {
                    children: "Dismiss",
                    onPress: () => toast.clear(),
                    variant: "tertiary",
                  },
                  description: "You have been signed up successfully!",
                  variant: "default",
                })
              }
            >
              Log in
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
