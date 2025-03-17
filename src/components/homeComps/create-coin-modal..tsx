import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

type Props = {
  open: boolean;
  setModal: (bool: boolean) => void;
};
export const CreateCoinModal = ({ open, setModal }: Props) => {
  return (
    <div>
      <Dialog open={open} onOpenChange={setModal}>
        <DialogContent className="gradient p-1 rounded-3xl sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl w-[95vw] modal">
          <div className="bg-brand-grey rounded-[20px] overflow-hidden">
            <DialogHeader className="bg-black p-4 text-center">
              <DialogTitle className="text-transparent bg-clip-text gradient text-xl mx-auto">
                Create New Coin
              </DialogTitle>
              <DialogDescription className="text-red-500 italic mx-auto">
                TIP: coin data cannot be changed after creation
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[80svh] p-4">
              <CreateCoinForm />
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const CreateCoinForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    ticker: "",
    description: "",
    websiteLink: "",
    telegram: "",
    twitter: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col w-full">
      {/* Form Fields Section */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* Name and Ticker Row */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-white mb-2 flex items-center">
              Name: <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name of coin"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded bg-black bg-opacity-40 text-white  focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-white mb-2 flex items-center">
              Ticker: <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="ticker"
              placeholder="Ticker"
              value={formData.ticker}
              onChange={handleChange}
              className="p-3 rounded bg-black bg-opacity-40 text-white  focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Description Field */}
        <div className="flex flex-col w-full">
          <label className="text-white mb-2 flex items-center">
            Description: <span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            name="description"
            placeholder="Name of coin"
            value={formData.description}
            onChange={handleChange}
            className="p-3 h-32 rounded bg-black bg-opacity-40 text-white  focus:outline-none focus:border-blue-500 resize-none"
            required
          />
        </div>

        {/* Image Upload Section */}
        <div className="flex flex-col w-full">
          <label className="text-white mb-2 flex items-center">
            Image or Video: <span className="text-gray-400 ml-1"></span>
          </label>
          <div className="border-2 border-dashed border-gray-600 rounded p-8 flex flex-col items-center justify-center text-center bg-black bg-opacity-20">
            <div className="mb-2 text-gray-400">
              Drag your file(s) to start uploading
            </div>
            <button
              type="button"
              className="mt-4 px-4 py-2 rounded-full flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Browse files
            </button>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex flex-col w-full md:w-1/3">
            <label className="text-white mb-2">Website Link</label>
            <input
              type="url"
              name="websiteLink"
              placeholder="Website Link"
              value={formData.websiteLink}
              onChange={handleChange}
              className="p-3 rounded bg-black bg-opacity-40 text-white  focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/3">
            <label className="text-white mb-2">Telegram</label>
            <input
              type="text"
              name="telegram"
              placeholder="Telegram"
              value={formData.telegram}
              onChange={handleChange}
              className="p-3 rounded bg-black bg-opacity-40 text-white  focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/3">
            <label className="text-white mb-2">Twitter</label>
            <input
              type="text"
              name="twitter"
              placeholder="Twitter"
              value={formData.twitter}
              onChange={handleChange}
              className="p-3 rounded bg-black bg-opacity-40 text-white  focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-green-400 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Create Your Coin
          </button>
        </div>
      </form>
    </div>
  );
};
