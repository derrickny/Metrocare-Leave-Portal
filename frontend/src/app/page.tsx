
"use client"

import Image from "next/image"
import Link from "next/link"
import '../app/globals.css'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {useState} from "react";
import axios from "axios";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setUsernameError("");
    setPasswordError("");
    try {
      const response = await axios.post("http://localhost:8080/login/", {
        username,
        password,
      },{headers: {
        "Content-Type": "application/json",
      }
      });
      // Handle successful login here
    } catch (error) {
      if ((error as any).response && (error as any).response.data) {
        // Assuming the error response has fields 'username' and 'password'
        setUsernameError((error as any).response.data.username || "");
        setPasswordError((error as any).response.data.password || "");
      }
    }
  };
  
  return (
    <form onSubmit={handleLogin}>
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your Username and password below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="Username"
                type="text"
                placeholder="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && <p className="text-red-500">{usernameError}</p>}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
               id="password" 
               type="password" 
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               required 
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
            <Button type="submit" className="w-full bg-green-500 text-white">
              Login
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden bg-muted lg:block bg-customBlue">
        <Image
          src="/images/Borcelle.png"
          alt="Image"
          width={940}
          height={788}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
    </form>
  )
}
