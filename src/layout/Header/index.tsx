"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/public/logo.png";
import Button from "@/components/Button";
import Link from "next/link";
import { get } from "@/providers/api";

const Header = () => {
  const returnHome = true;
  const retunActivities = true;
  const teacherId = "579c7ca8-014f-4631-baf2-3f42b041c132";
  const [name, setName] = useState("Teacher");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get("profiles/teacher/");
        const teacher = response.filter(
          (teacher: { id: string; user: { name: string } }) =>
            teacher.id === teacherId,
        );
        setName(teacher[0].user.name);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <header className="bg-sesi text-white p-4 grid grid-cols-header items-center">
      <h1>{name}</h1>
      <Link href="/">
        <Image
          src={Logo.src}
          alt="Logo"
          width={200}
          height={200}
          className="justify-self-center"
        />
      </Link>
      <div className="flex gap-4 justify-self-end">
        {returnHome && (
          <Button link="/" theme="green">
            Home
          </Button>
        )}
        {retunActivities && (
          <Button link="/activities" theme="green">
            Atividades
          </Button>
        )}
        <Button link="/logout" theme="red">
          Sair
        </Button>
      </div>
    </header>
  );
};

export default Header;
