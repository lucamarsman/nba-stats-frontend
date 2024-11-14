import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout =({ children }: LayoutProps) => {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="text-center py-4 bg-blue-800 text-white">
          <h1 className="text-3xl font-bold">NBA Stats</h1>
        </header>
        <main className="flex-1 p-4">{children}</main>
        <footer className="text-center py-4 bg-gray-800 text-white">
          <p>NBA Stats App © 2024</p>
        </footer>
      </div>
    );
  }