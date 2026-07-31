// Source - https://stackoverflow.com/a/76451316
// Posted by Kannu Mandora, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-23, License - CC BY-SA 4.0

import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
