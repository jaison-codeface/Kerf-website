"use server"
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    const body = await request.formData();
    const response = await axios.post(
      'https://cfuat.in/kerf/wp-json/contact-form-7/v1/contact-forms/b2ddf82/feedback',
      body,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}