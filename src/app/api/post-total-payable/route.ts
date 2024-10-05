import { NextRequest } from "next/server";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat)
const DATE_FORMAT = 'DD/MM/YYYY'
const artificialDelay = async () => {
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    return new Promise((resolve) => setTimeout(resolve, randomNumber));
}

// "customer": {
//     "identityType": 1,
//     "identityNumber": "{fid-api-input-1}",
//     "ethnicityId": null
//   },
// "productId": null,
type TotalPayableBody = {
    effectiveDate: string,
    extendPoiStartDate: string,
    extensionPeriodMonth: string,
    customer: {
        identityType: number,
        identityNumber: string
        enthnicityId: number | null
    },
    agentCode: string,
    agentType: number,
    productId: number | null
}
export async function GET() {
    return Response.json({
        message: "Wrong method, bro! Use POST instead of GET for this endpoint.",
        meme: "https://i.imgflip.com/7qzlzp.jpg"
    })
}

export async function POST(request: NextRequest) {
    await artificialDelay();
    const body = await request.json() as TotalPayableBody
    const date = body.extendPoiStartDate
    const renewalPeriod = body.extensionPeriodMonth
    if (!date || !renewalPeriod) {
        return Response.json({ message: "Missing date or renewal period" }, { status: 400 });
    }
    const renewalDate = dayjs(date, DATE_FORMAT).add(Number(renewalPeriod), "month");
    const totalPayable = Math.abs(renewalDate.diff(dayjs(), "day")) * 1000;
    await artificialDelay();

    return Response.json({
        renewalDate: renewalDate.format(DATE_FORMAT),
        totalPayable,
        originalBody: { ...body }
    });
}