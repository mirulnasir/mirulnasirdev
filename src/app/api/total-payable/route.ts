import { NextRequest } from "next/server";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat)
const DATE_FORMAT = 'DD/MM/YYYY'
const artificialDelay = async () => {
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    return new Promise((resolve) => setTimeout(resolve, randomNumber));
}
export async function GET(request: NextRequest) {
    await artificialDelay();
    const date = await request.nextUrl.searchParams.get("date");
    const renewalPeriod = await request.nextUrl.searchParams.get("renewalPeriod");
    if (!date || !renewalPeriod) {
        return Response.json({ message: "Missing date or renewal period" }, { status: 400 });
    }
    const renewalDate = dayjs(date, DATE_FORMAT).add(Number(renewalPeriod), "month");
    const totalPayable = Math.abs(renewalDate.diff(dayjs(), "day")) * 1000;
    await artificialDelay();

    return Response.json({
        renewalDate: renewalDate.format(DATE_FORMAT),
        totalPayable
    });
}