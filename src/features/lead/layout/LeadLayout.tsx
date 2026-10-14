import type { ReactNode } from "react";
import styles from "./LeadLayout.module.css";

type LeadLayoutProps = {
    image: string;
    overlayContent?: ReactNode;
    children: ReactNode;
};

export default function LeadLayout({
    image,
    overlayContent,
    children,
}: LeadLayoutProps) {
    return (
        <main className={styles.layout}>
            <aside
                className={styles.visual}
                style={{
                    backgroundImage: `linear-gradient(to top, rgb(20 22 28 / 55%), transparent 55%), url("${image}")`,
                }}
            >
                <div className={styles.overlay}>
                    {overlayContent}
                </div>
            </aside>

            <section className={styles.content}>
                {children}
            </section>
        </main>
    );
}