import type { CSSProperties } from 'react';

export const styles: { modalWrapper: CSSProperties; modal: CSSProperties } = {
    modalWrapper: {
        position: "fixed",
        zIndex: 9999,
        inset: 0,
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        width: "600px",
        maxWidth: "90%",
        background: "#222",
        border: "1px solid #000000",
        borderRadius: "8px",
        boxShadow: "0 8px 16px rgb(0 0 0 / 40%)",
    },
};