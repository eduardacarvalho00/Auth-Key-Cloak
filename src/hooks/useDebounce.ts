import { useRef } from "react";

function useDebounce(fn: any, delay: number) {
	const timeoutRef = useRef(0);

	function debouncedFn(...args: any) {
		window.clearTimeout(timeoutRef.current);

		timeoutRef.current = window.setTimeout(() => {
			fn(...args);
		}, delay);
	}

	return debouncedFn;
}
