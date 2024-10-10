'use client'
import { Divide } from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { DateField, Label, DateInput, DateSegment, DateSegmentProps } from 'react-aria-components';

function getCaret(el: HTMLElement) {
    let caretAt = 0;
    const sel = window.getSelection();

    if (sel && sel.rangeCount === 0) { return caretAt; }

    if (sel) {
        const range = sel.getRangeAt(0);
        const preRange = range.cloneRange();
        preRange.selectNodeContents(el);
        preRange.setEnd(range.endContainer, range.endOffset);
        caretAt = preRange.toString().length;
    }

    return caretAt;
}

function setCaret(el: HTMLElement, offset: number) {
    console.log("SEL", el)
    const sel = window.getSelection();
    const range = document.createRange();

    if (el.childNodes[0]) {
        range.setStart(el.childNodes[0], Math.min(offset, el.textContent?.length || 0));
        range.collapse(true);
        sel?.removeAllRanges();
        sel?.addRange(range);
    }
}

const FocusedSegment = ({ segment }: { segment: DateSegmentProps['segment'] }) => {
    const [isFocused, setIsFocused] = useState(false);
    const segmentInput = useRef<HTMLDivElement>(null);
    const caretPos = useRef<number>(0);

    useEffect(() => {
        const handleFocusIn = () => setIsFocused(true);
        const handleFocusOut = () => setIsFocused(false);

        const currentSegment = segmentInput.current;
        if (currentSegment) {
            currentSegment.addEventListener('focusin', handleFocusIn);
            currentSegment.addEventListener('focusout', handleFocusOut);
        }

        return () => {
            if (currentSegment) {
                currentSegment.removeEventListener('focusin', handleFocusIn);
                currentSegment.removeEventListener('focusout', handleFocusOut);
            }
        };
    }, []);

    useEffect(() => {
        if (isFocused && segmentInput.current) {
            setCaret(segmentInput.current, caretPos.current);
            segmentInput.current.focus();
            caretPos.current = getCaret(segmentInput.current);
            // Update the segment value here. This might depend on how react-aria-components handles updates.
            // For now, we'll just log the new value
            console.log('New segment value:', caretPos.current, segmentInput.current.textContent);
        }
    }, [isFocused, segment.text]);

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
        if (segmentInput.current) {
            caretPos.current = getCaret(segmentInput.current);
            // Update the segment value here. This might depend on how react-aria-components handles updates.
            // For now, we'll just log the new value
            console.log('New segment value:', e.currentTarget.textContent);
        }
    };

    return (
        <DateSegment
            ref={segmentInput}
            className={`border p-2 ${isFocused ? 'bg-blue-100' : ''}`}
            segment={segment}

        />
    );
}

const Page = () => {
    return (
        <div className="">
            <DateField>
                <Label>Birth date</Label>
                <DateInput className={'flex gap-2'}>
                    {segment => segment.type !== 'literal' ? <FocusedSegment segment={segment} /> : <></>}


                </DateInput>
            </DateField>
            <div className="w-84 h-32 bg-slate-400"></div>
        </div>
    )
}

export default Page