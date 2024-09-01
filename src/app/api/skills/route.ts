// app/api/skills/route.ts
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const profession = url.searchParams.get('profession');
  const type = url.searchParams.get('type');
  const level = url.searchParams.get('level');

  if (!profession || !type || !level) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
  }

  const filePath = path.resolve('./public/data', profession, type, `level${level}.json`);

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'File not found or error reading file' }, { status: 404 });
  }
}
