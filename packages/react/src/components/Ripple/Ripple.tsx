import {
    CSSProperties,
    MutableRefObject,
    SyntheticEvent,
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";
import { nanoid } from "nanoid";

export interface RippleProps {
    containerRef?: MutableRefObject<any>;
    disabled?: boolean;
}

type RippleData = { key: string; style: CSSProperties };

export function Ripple({ disabled, containerRef }: RippleProps) {
    const [ripples, setRipples] = useState<Array<RippleData>>([]);
    const isButtonPressed = useRef(false);

    const handlePressStart = useCallback((e: KeyboardEvent | SyntheticEvent<HTMLSpanElement, PointerEvent>) => {
        if (disabled || isButtonPressed.current) return;
        isButtonPressed.current = true;

        let offsetX = '50%';
        let offsetY = '50%';

        if ('nativeEvent' in e) {
            offsetX = `${e.nativeEvent.offsetX}px`;
            offsetY = `${e.nativeEvent.offsetY}px`;
        }

        setRipples((ripples) => [...ripples, { key: nanoid(), style: { animationName: 'ripple-press-start', left: offsetX, top: offsetY } }])
    }, [disabled]);

    const handlePressEnd = useCallback(() => {
        isButtonPressed.current = false;
        if (disabled) return;

        setRipples((ripples) => {
            return ripples.map(ripple => ({
                ...ripple,
                style: {
                    ...ripple.style,
                    animationName: 'ripple-press-end',
                }
            }));
        })
    }, [disabled]);

    useEffect(() => {
        containerRef?.current.addEventListener('keydown', handlePressStart);
        containerRef?.current.addEventListener('keyup', handlePressEnd);
        containerRef?.current.addEventListener('blur', handlePressEnd);

        return () => {
            containerRef?.current.removeEventListener('keydown', handlePressStart);
            containerRef?.current.removeEventListener('keyup', handlePressEnd);
            containerRef?.current.removeEventListener('blur', handlePressEnd);
        }
    }, [containerRef?.current, handlePressStart, handlePressEnd]);

    return (
        <span className={'sl-Ripple'} onMouseDown={handlePressStart as any} onMouseUp={handlePressEnd}>
            {ripples.map((ripple) => (<span
                key={ripple.key}
                className={'sl-Ripple__ripple'}
                style={ripple.style}
                onAnimationEnd={() => {
                    if (ripple.style.animationName === 'ripple-press-end') {
                        setRipples(ripples => ripples.filter(r => r !== ripple))
                    }
                }}
            />))}
        </span>
    )
}

