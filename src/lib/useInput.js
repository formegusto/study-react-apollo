import { useCallback, useState } from "react";

const useInput = function(initialState) {
    const [value, setValue] = useState(initialState);

    const onChange = useCallback((e) => {
        setValue({
            ...value,
            [e.target.name] : e.target.value
        });
    }, [value]);

    return {
        value,
        onChange
    };
}

export default useInput;