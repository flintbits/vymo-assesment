

import DynamicForm from "../component/DynamicForm";
import LeadLayout from "../layout/LeadLayout";

export default function LeadPage() {
    return (
        <LeadLayout
            image="/assets/lead.jpg"
            overlayContent={
                <>
                    <p style={{ fontSize: "var(--text-base)", color: "var(--color-primary)" }}>GET IN TOUCH</p>
                    <h1 style={{ fontSize: "var(--text-3xl)", color: "var(--color-text)" }}>Let’s build something great.</h1>
                    <p style={{ fontSize: "var(--text-base)", color: "var(--color-surface)" }}>We'd love to hear from you.</p>
                </>
            }
        >
            <header>
                <h2 style={{ fontSize: "var(--text-2xl)", color: "var(--color-text)" }}>Tell us about yourself</h2>
                <p style={{ fontSize: "var(--text-lg)", color: "var(--color-muted)", fontWeight: "var(--weight-regular)" }}>Weather you have a question in mind or just want to say hello we would like to hear from you.</p>
            </header>

            <DynamicForm />
        </LeadLayout>
    );
}