import { NextRequest } from "next/server";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat)
const DATE_FORMAT = 'DD/MM/YYYY'
const artificialDelay = async () => {
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    return new Promise((resolve) => setTimeout(resolve, randomNumber));
}

// {
//     "code": "D003",
//     "premium": 0,
//     "sumInsured": 700
// },

type TotalPayableBody = {
    addOn: {
        code: string,
        premium: number,
        sumInsured: number
    }[]
}

export async function GET() {
    return Response.json({
        message: "Wrong method, bro! Use POST instead of GET for this endpoint.",
        meme: "https://i.imgflip.com/7qzlzp.jpg"
    })
}


const postResult = {
    "quotationNo": "MI044757",
    "planPremium": 1069.96,
    "addOnPremium": 0,
    "ncdAmount": 588.48,
    "grossPremium": 481.48,
    "discountAmount": 0,
    "discountRate": 0,
    "discount": [],
    "premiumAfterDiscount": 481.48,
    "premiumAfterGst": 481.48,
    "taxRate": 8,
    "sstAmount": 38.52,
    "stampDuty": 10,
    "netPremium": 481.48,
    "totalPremium": 530,
    "excess": 0,
    "dlsmAmount": 144.44,
    "dlsmRecommendedRate": 0.1,
    "dlsmRecommendedAmount": 48.148,
    "addOn": [
        {
            "addOnId": 29,
            "code": "D034",
            "name": "Cash Rebate Benefit",
            "description": "Drive Less Save More",
            "longDescription": "Cash Rebate Benefit - Drive Less Save More RM0",
            "sumInsured": 0,
            "grossPremium": 0,
            "discountAmount": 0,
            "discountRate": 0,
            "netPremium": 0,
            "taxRate": 8,
            "taxAmount": 0,
            "totalPremium": 0,
            "discount": []
        }
    ],
    "personalAccident": null,
    "value": {
        "startDate": "22/12/2024",
        "endDate": "21/12/2025",
        "coverage": 1,
        "isNewBusiness": false,
        "isRenewal": true,
        "isNewVehicle": false,
        "productCode": "MI",
        "vehicleAge": 8,
        "nvic": "JAO16G",
        "mmCode": "JAO16G",
        "makeCode": "33",
        "makeName": null,
        "modelCode": "11",
        "modelName": null,
        "variant": "ADVANCE",
        "modelType": "LCL",
        "capacity": "1329",
        "seat": 5,
        "usage": 1,
        "indicator": "O",
        "wattage": 0,
        "chassisNo": "PM2B301S003026618",
        "engineNo": "0A28338",
        "yearMake": "2016",
        "vehicleDescription": "PERODUA BEZZA ADVANCE (A)",
        "usageCode": "MX1",
        "usageName": "Private Car - Private Use",
        "usageDescription": "Private Car - Private Use",
        "vehicleClassId": 1,
        "vehicleClassCode": "PC",
        "vehicleClassName": null,
        "vehicleClassDescription": "Private Car",
        "marketValue": 26200,
        "maximumAgreedValue": 30100,
        "minimumAgreedValue": 28300,
        "maximumMarketValue": 26200,
        "minimumMarketValue": 23600,
        "proposedSumInsured": 23600,
        "hasAgreedValue": true,
        "agreedValueDeclineCode": null,
        "agreedValueReason": null,
        "hasMasterManagementCodeRule": false,
        "numClaimsPast3Years": 0,
        "modelLossRatio": 80.24403,
        "drivingExperience": 15,
        "tenure": 0,
        "hasNcd": true,
        "ncdPercentage": 55,
        "nextNcdEffectiveDate": "2024-12-22T00:00:00",
        "ncd": {
            "appCode": "",
            "curNCDEffDt": null,
            "curNCDExpDt": null,
            "curNCDLevel": null,
            "insCode": "411",
            "nxtNCDEffDt": null,
            "nxtNCDLevel": null,
            "preInsCode": "411",
            "refNo": "EDP_20241113062317371",
            "respCode": "ENQ000",
            "subRespCode": "E013|E016|E017",
            "subRespValue": "1|202102|20212",
            "productCode": "",
            "errorCode": "",
            "errorDesc": ""
        },
        "vix": {
            "builtType": "C.K.D.",
            "capacity": "1329",
            "chassisNo": "PM2B301S003026618",
            "coverType": "3",
            "engineNo": "0A28338",
            "nvic": "JAO16G",
            "polExpDate": "21122024",
            "preInsCode": "411",
            "respcode": "000",
            "vehClass": "02",
            "vehMake": "33",
            "vehModel": "11",
            "vehRegNo": "VJ7420",
            "vehUse": "1",
            "yearMake": "2016",
            "errorCode": null
        },
        "eligibleAddOn": [
            {
                "addOnId": 7,
                "code": "B089",
                "name": "Windscreen Coverage",
                "description": "400 – Unlimited",
                "longDescription": "Windscreen Coverage - 400 – Unlimited",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 8,
                "code": "D003",
                "name": "Smart Key Replacement",
                "description": "700 – Unlimited",
                "longDescription": "Smart Key Replacement - 700 – Unlimited",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 9,
                "code": "P057",
                "name": "Extreme Weather Coverage",
                "description": "Special Perils Coverage",
                "longDescription": "Extreme Weather Coverage - Special Perils Coverage",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 10,
                "code": "P10A",
                "name": "Cash Assistance",
                "description": "Loss of Use (LOU) 10 Days x RM50/day",
                "longDescription": "Cash Assistance - Loss of Use (LOU) 10 Days x RM50/day",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 11,
                "code": "P10B",
                "name": "Cash Assistance",
                "description": "Loss of Use (LOU) 10 Days x RM100/day",
                "longDescription": "Cash Assistance - Loss of Use (LOU) 10 Days x RM100/day",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 12,
                "code": "P10C",
                "name": "Cash Assistance",
                "description": "Loss of Use (LOU) 10 Days x RM150/day",
                "longDescription": "Cash Assistance - Loss of Use (LOU) 10 Days x RM150/day",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 13,
                "code": "P10D",
                "name": "Cash Assistance",
                "description": "Loss of Use (LOU) 10 Days x RM200/day",
                "longDescription": "Cash Assistance - Loss of Use (LOU) 10 Days x RM200/day",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 14,
                "code": "P07A",
                "name": "Cash Assistance",
                "description": "Compensation when your vehice is under repair (CART) 7 Days x RM50/day",
                "longDescription": "Cash Assistance - Compensation when your vehice is under repair (CART) 7 Days x RM50/day",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 15,
                "code": "P07B",
                "name": "Cash Assistance",
                "description": "Compensation when your vehice is under repair (CART) 7 Days x RM100/day",
                "longDescription": "Cash Assistance - Compensation when your vehice is under repair (CART) 7 Days x RM100/day",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 16,
                "code": "P07C",
                "name": "Cash Assistance",
                "description": "Compensation when your vehice is under repair (CART) 7 Days x RM200/day",
                "longDescription": "Cash Assistance - Compensation when your vehice is under repair (CART) 7 Days x RM200/day",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 17,
                "code": "P14A",
                "name": "Cash Assistance",
                "description": "Compensation when your vehice is under repair (CART) 14 Days x RM50/day",
                "longDescription": "Cash Assistance - Compensation when your vehice is under repair (CART) 14 Days x RM50/day",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 18,
                "code": "P14B",
                "name": "Cash Assistance",
                "description": "Compensation when your vehice is under repair (CART) 14 Days x RM100/day",
                "longDescription": "Cash Assistance - Compensation when your vehice is under repair (CART) 14 Days x RM100/day",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 19,
                "code": "P14C",
                "name": "Cash Assistance",
                "description": "Compensation when your vehice is under repair (CART) 14 Days x RM200/day",
                "longDescription": "Cash Assistance - Compensation when your vehice is under repair (CART) 14 Days x RM200/day",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 20,
                "code": "P21A",
                "name": "Cash Assistance",
                "description": "Compensation when your vehice is under repair (CART) 21 Days x RM50/day",
                "longDescription": "Cash Assistance - Compensation when your vehice is under repair (CART) 21 Days x RM50/day",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 21,
                "code": "P21B",
                "name": "Cash Assistance",
                "description": "Compensation when your vehice is under repair (CART) 21 Days x RM100/day",
                "longDescription": "Cash Assistance - Compensation when your vehice is under repair (CART) 21 Days x RM100/day",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 22,
                "code": "P21C",
                "name": "Cash Assistance",
                "description": "Compensation when your vehice is under repair (CART) 21 Days x RM200/day",
                "longDescription": "Cash Assistance - Compensation when your vehice is under repair (CART) 21 Days x RM200/day",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 23,
                "code": "B100",
                "name": "Protection for Third Party",
                "description": "Legal Liability to Passengers",
                "longDescription": "Protection for Third Party - Legal Liability to Passengers",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 24,
                "code": "B072",
                "name": "Protection for Third Party",
                "description": "Legal Liability of Passengers",
                "longDescription": "Protection for Third Party - Legal Liability of Passengers",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 25,
                "code": "D002",
                "name": "Maintain-Like-New Coverage",
                "description": "New Spare Part Replacement Cover",
                "longDescription": "Maintain-Like-New Coverage - New Spare Part Replacement Cover",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 26,
                "code": "D01A",
                "name": "Maintain-Like-New Coverage",
                "description": "Car Re­-Spray Limit up to RM1,000",
                "longDescription": "Maintain-Like-New Coverage - Car Re­-Spray Limit up to RM1,000",
                "premiumClass": "",
                "defaultSumInsured": 1000,
                "addOnOptions": []
            },
            {
                "addOnId": 27,
                "code": "D01B",
                "name": "Maintain-Like-New Coverage",
                "description": "Car Re­-Spray Limit up to RM1,500",
                "longDescription": "Maintain-Like-New Coverage - Car Re­-Spray Limit up to RM1,500",
                "premiumClass": "",
                "defaultSumInsured": 1500,
                "addOnOptions": []
            },
            {
                "addOnId": 28,
                "code": "D01C",
                "name": "Maintain-Like-New Coverage",
                "description": "Car Re­-Spray Limit up to RM2,500",
                "longDescription": "Maintain-Like-New Coverage - Car Re­-Spray Limit up to RM2,500",
                "premiumClass": "",
                "defaultSumInsured": 2500,
                "addOnOptions": []
            },
            {
                "addOnId": 29,
                "code": "D034",
                "name": "Cash Rebate Benefit",
                "description": "Drive Less Save More",
                "longDescription": "Cash Rebate Benefit - Drive Less Save More RM0",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": []
            },
            {
                "addOnId": 30,
                "code": "D027",
                "name": "Child Car Safety Seat",
                "description": "Child Car Safety Seat",
                "longDescription": "Child Car Safety Seat",
                "premiumClass": "",
                "defaultSumInsured": 0,
                "addOnOptions": [
                    {
                        "label": "1",
                        "sumInsured": 500
                    },
                    {
                        "label": "2",
                        "sumInsured": 1000
                    },
                    {
                        "label": "3",
                        "sumInsured": 1500
                    }
                ]
            }
        ],
        "isEditable": null,
        "agentTypeCode": "EEC",
        "hasDlsm": true,
        "isEligiblePersonalAccident": true
    },
    "status": true,
    "agreedValueDeclineCode": "",
    "agreedValueReason": "",
    "errorCode": null,
    "errorMessage": "",
    "makeName": "PERODUA",
    "modelName": "BEZZA"
} as const
const getAddonDetail = (code: string) => {
    return postResult.value.eligibleAddOn.find(addon => addon.code === code)
}
const createRandomNumber = () => {
    return Math.floor(Math.random() * 10000)
}
const createAddon = (addon: typeof postResult.value.eligibleAddOn[number]) => {
    // to create
    // "addOnId": 29,
    // "code": "D034",
    // "name": "Cash Rebate Benefit",
    // "description": "Drive Less Save More",
    // "longDescription": "Cash Rebate Benefit - Drive Less Save More RM0",
    // "sumInsured": 0,
    // "grossPremium": 0,
    // "discountAmount": 0,
    // "discountRate": 0,
    // "netPremium": 0,
    // "taxRate": 8,
    // "taxAmount": 0,
    // "totalPremium": 0,
    // "discount": []
    return {
        id: addon.addOnId,
        code: addon.code,
        name: addon.name,
        description: addon.description,
        longDescription: addon.longDescription,
        sumInsured: createRandomNumber(),
        grossPremium: createRandomNumber(),
        discountAmount: createRandomNumber(),
        discountRate: createRandomNumber(),
        netPremium: createRandomNumber(),
        taxRate: createRandomNumber(),
        taxAmount: createRandomNumber(),
        totalPremium: createRandomNumber(),
        discount: []
    }
}
export async function POST(request: NextRequest) {
    const result = {
        ...postResult,
        addOn: postResult.value.eligibleAddOn ? postResult.value.eligibleAddOn.map(addon => ({
            ...addon,
            ...(getAddonDetail(addon.code) ? createAddon(getAddonDetail(addon.code) as typeof postResult.value.eligibleAddOn[number]) : {})
        })) : []
    }
    await artificialDelay();
    return Response.json(result);
}

