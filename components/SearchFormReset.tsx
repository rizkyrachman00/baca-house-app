"use client";

import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
  const handleReset = () => {
    const form = document.querySelector(".searh-form") as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <button type="reset" onClick={handleReset}>
      <Link href="/" className="search-btn text-white">
        <X />
      </Link>
    </button>
  );
};

export default SearchFormReset;
