'use client'

import { Label } from '@/components/ui/label';
import React, { ChangeEvent, use, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const TestimonialForm: React.FC = () => {
  const [formData, setFormData] = useState({
    lang: '',
    company: '',
    role: '',
    name: '',
    image: '',
    text: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your form submission logic here
    const res = await fetch('/api/testimonial', { body: JSON.stringify(formData), method: 'POST' });

    if (res.ok) {
      await res.json();
      (e.currentTarget as HTMLFormElement).reset();
    }
  };

  return (
    <div className='container mx-auto px-4 lg:px-8 mt-6 ltr'>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Label>
          <Select name='lang' value={formData.lang} onValueChange={(value) => setFormData({ ...formData, lang: value })} required>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a lang" />
            </SelectTrigger>
            <SelectContent className="bg-primary">
              <SelectGroup>
                <SelectLabel>Lang</SelectLabel>
                <SelectItem value="ar">Arabic</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">French</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>
        <Label>
          <span className="text-sm font-semibold text-secondary mb-2 block">
            Company Name:
          </span>
          <Input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          <span className="text-sm font-semibold text-secondary mb-2 block">
            Client Name:
          </span>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          <span className="text-sm font-semibold text-secondary mb-2 block">
            Client Role:
          </span>
          <Input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          <span className="text-sm font-semibold text-secondary mb-2 block">
            Image URL:
          </span>
          <Input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <span className="text-sm font-semibold text-secondary mb-2 block">
            Opinion:
          </span>
          <Textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
          />
        </Label>
        <Button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TestimonialForm;