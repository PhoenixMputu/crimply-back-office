'use client';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main>
      <form>
        <div>
          <h1>Connexion</h1>
          <p>Content de vous revoir</p>
        </div>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
            />
            <p>{"L'adresse email doit contenir un @"}</p>
          </div>
          <div>
            <div>
              <label htmlFor="password">Password</label>
              <Link
                href="/forgetPassword"
                className="text-blue-500 hover:text-blue-700"
              >
                Mot de passe oublié
              </Link>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
            />
          </div>
        </div>
      </form>
    </main>
  );
};

export default page;
