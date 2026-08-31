from __future__ import annotations

import shutil
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Aashutosh_Gandotra_Resume.pdf"
PUBLIC = ROOT / "public" / "Aashutosh_Resume.pdf"

NAVY = colors.HexColor("#17395F")
BLUE = colors.HexColor("#0A4DCC")
TEXT = colors.HexColor("#171717")
MUTED = colors.HexColor("#525252")
RULE = colors.HexColor("#B9C3CF")


def link(label: str, url: str) -> str:
    return f'<link href="{url}" color="#0A4DCC"><u>{label}</u></link>'


def bullets(items: list[str], style: ParagraphStyle) -> ListFlowable:
    return ListFlowable(
        [
            ListItem(Paragraph(item, style), leftIndent=8, bulletColor=NAVY)
            for item in items
        ],
        bulletType="bullet",
        bulletFontName="Helvetica",
        bulletFontSize=7,
        bulletColor=NAVY,
        start="circle",
        leftIndent=13,
        bulletIndent=1,
        spaceAfter=1.5,
    )


def section(title: str, styles: dict[str, ParagraphStyle]):
    return [
        Spacer(1, 5),
        Paragraph(title.upper(), styles["section"]),
        HRFlowable(
            width="100%",
            thickness=0.7,
            color=NAVY,
            spaceBefore=1.2,
            spaceAfter=4,
        ),
    ]


def job(
    heading: str,
    location: str,
    items: list[str],
    styles: dict[str, ParagraphStyle],
    links: str | None = None,
):
    content = [
        Paragraph(heading, styles["job"]),
        Paragraph(location, styles["meta"]),
        bullets(items, styles["bullet"]),
    ]
    if links:
        content.append(Paragraph(links, styles["meta"]))
    content.append(Spacer(1, 2.5))
    return KeepTogether(content)


def build_resume() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    base = getSampleStyleSheet()
    styles = {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=20.5,
            leading=22.5,
            textColor=NAVY,
            alignment=TA_CENTER,
            spaceAfter=2,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=12.5,
            textColor=TEXT,
            alignment=TA_CENTER,
            spaceAfter=3,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.7,
            leading=10.8,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=1,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.7,
            leading=11,
            textColor=NAVY,
            spaceAfter=0,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.95,
            leading=11.2,
            textColor=TEXT,
            spaceAfter=1.5,
        ),
        "skill": ParagraphStyle(
            "Skill",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.6,
            leading=10.6,
            textColor=TEXT,
            spaceAfter=1,
        ),
        "job": ParagraphStyle(
            "Job",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.05,
            leading=10.9,
            textColor=TEXT,
            spaceAfter=0.5,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=8,
            leading=9.6,
            textColor=MUTED,
            spaceAfter=1.4,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.45,
            leading=10.5,
            textColor=TEXT,
            spaceAfter=0.3,
        ),
    }

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=0.46 * inch,
        leftMargin=0.46 * inch,
        topMargin=0.42 * inch,
        bottomMargin=0.34 * inch,
        title="Aashutosh Gandotra - Resume",
        author="Aashutosh Gandotra",
        subject="Lead Full Stack Engineer",
    )

    story = [
        Paragraph("AASHUTOSH GANDOTRA", styles["name"]),
        Paragraph("Lead Full Stack Engineer", styles["role"]),
        Paragraph(
            "Gurugram, India &nbsp;|&nbsp; +91-8825024304 &nbsp;|&nbsp; "
            + link("ashugandotra14@gmail.com", "mailto:ashugandotra14@gmail.com"),
            styles["contact"],
        ),
        Paragraph(
            link("GitHub", "https://github.com/Aashu-crypto")
            + " &nbsp;|&nbsp; "
            + link("LinkedIn", "https://www.linkedin.com/in/aashutosh-gandotra/")
            + " &nbsp;|&nbsp; "
            + link("Portfolio", "https://www.aashutoshgandotra.com"),
            styles["contact"],
        ),
        Spacer(1, 4),
        HRFlowable(width="100%", thickness=1.3, color=NAVY, spaceAfter=2),
    ]

    story += section("Professional summary", styles)
    story.append(
        Paragraph(
            "Lead Full Stack Engineer with 4+ years delivering production mobile and web platforms end to end. "
            "Specializes in React Native, Node.js, and TypeScript, with hands-on ownership of real-time systems, "
            "AI-assisted workflows, cloud backends, and release operations across EV mobility and healthcare.",
            styles["body"],
        )
    )

    story += section("Technical skills", styles)
    for label, value in [
        ("Languages", "JavaScript, TypeScript, Python"),
        ("Mobile and frontend", "React Native, React, Next.js, Redux, Tailwind CSS, HTML, CSS"),
        ("Backend", "Node.js, Express, Prisma, REST APIs, WebRTC, WebSockets"),
        ("Data and cloud", "PostgreSQL, Redis, Firebase, AWS, Docker, CI/CD"),
        ("AI and platforms", "Gemini, MCP, Mapbox, OCPI, SDUI, RBAC, Cashfree, Zoho"),
    ]:
        story.append(Paragraph(f"<b>{label}:</b> {value}", styles["skill"]))

    story += section("Professional experience", styles)
    story.append(
        job(
            "<b>Lead Full Stack Engineer</b> | <b>Zaptric Mobility</b> | Aug 2024 - Present",
            "Gurugram, India",
            [
                "Own architecture and end-to-end delivery for a full-stack EV mobility platform spanning two React Native apps, a React admin dashboard, and Node.js/Prisma services.",
                "Delivered WhatsApp-based EV charging and OCPI eMSP capabilities for station discovery, sessions, billing, and tariff interoperability.",
                "Built a Gemini/MCP operations agent and RBAC fleet workflows covering vehicles, maintenance, driver documentation, wallets, and payments.",
                "Implemented SDUI, real-time GPS navigation, biometric check-in, and Cashfree/Zoho payment integrations in production mobile apps.",
            ],
            styles,
            "Zaptric: "
            + link("Website", "https://zaptric.in/")
            + " | "
            + link(
                "Google Play",
                "https://play.google.com/store/apps/details?id=com.zaptric.pilotmain",
            ),
        )
    )
    story.append(
        job(
            "<b>Software Developer</b> | <b>Etherium Technologies</b> | Jul 2023 - Aug 2024",
            "Jammu, India",
            [
                "Built real-time telehealth experiences in React Native using WebRTC, WebSockets, Redux, and Firebase.",
                "Improved rendering, network performance, and release reliability through targeted optimization and Dockerized deployments.",
            ],
            styles,
            "All Cures: "
            + link(
                "App Store",
                "https://apps.apple.com/ie/app/all-cures/id6748640097",
            )
            + " | "
            + link("Website", "https://www.all-cures.com/"),
        )
    )
    story.append(
        job(
            "<b>Computer Science Teacher</b> | <b>Ministry of Education, Government of India</b> | Apr 2022 - Jul 2023",
            "Jammu, India",
            [
                "Contributed UI/UX for a React Native school-attendance app and designed a project-based Python curriculum for high school students.",
            ],
            styles,
        )
    )

    story += section("Education", styles)
    story.append(
        Paragraph(
            "<b>B.E. in Computer Science</b> | Government College of Engineering and Technology | 2018 - 2022 | GPA 8.0/10",
            styles["body"],
        )
    )

    story += section("Certifications", styles)
    story.append(
        Paragraph(
            "Full Stack Web Development - 100xDevs (2024) &nbsp;|&nbsp; React Native - Meta (2023) &nbsp;|&nbsp; "
            "React - Meta (2023) &nbsp;|&nbsp; Data Structures and Algorithms - Udemy (2022)",
            styles["body"],
        )
    )

    doc.build(story)
    shutil.copyfile(OUTPUT, PUBLIC)


if __name__ == "__main__":
    build_resume()
