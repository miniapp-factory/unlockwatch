import { NextResponse } from "next/server";

export async function GET() {
  // Mock data – replace with real API calls or database queries
  const data = [
    {
      id: 1,
      token: "BTC",
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      percent: 10,
      dollarValue: 500000,
      impactScore: 0.75,
    },
    {
      id: 2,
      token: "ETH",
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      percent: 5,
      dollarValue: 300000,
      impactScore: 0.60,
    },
  ];
  return NextResponse.json(data);
}
