#!/usr/bin/env python3
"""
SEO Update Script for Monitor Test Tool
Automatically updates SEO meta tags for all HTML files
"""

import os
import re
from typing import Dict, List

# Base URL for the project
BASE_URL = "https://maksim4351.github.io/test"

# List of all HTML files to update (excluding dashboard.html which is just a redirect)
HTML_FILES = [
    "index.html",
    "dead_pixel_test.html", 
    "color_test.html",
    "cluster_test.html",
    "latency_test.html",
    "view_angle.html",
    "gradient_test.html",
    "gpu_stress_test.html",
    "touch_test.html",
    "inversion_test.html",
    "image_retention_test.html",
    "response_time_test.html",
    "pwm_flicker_test.html",
    "touch_grid_test.html",
    "screen_info.html",
    "screen_info_simple.html",
    "auth.html"
]

# SEO data for each page
SEO_DATA = {
    "index.html": {
        "title": "Monitor Test Tool - Free Online Display Diagnostics & GPU Performance Testing",
        "description": "Free online monitor test tool. Check dead pixels, screen resolution, GPU performance, color accuracy, and display quality. Professional display diagnostics for any monitor.",
        "keywords": "monitor test, dead pixel test, screen test, display test, GPU test, monitor diagnostics, screen resolution, color test, monitor quality, display checker, pixel test, color accuracy test, latency test, response time test, HDR test, touch screen test, PWM flicker test, gradient test, view angle test, image retention test"
    },
    "dead_pixel_test.html": {
        "title": "Dead Pixel Test - Free Online Monitor Pixel Detection Tool",
        "description": "Free online dead pixel test tool. Detect stuck, dead, or hot pixels on your monitor. Professional pixel testing with systematic screen scanning.",
        "keywords": "dead pixel test, stuck pixel test, hot pixel test, monitor pixel detection, screen pixel test, display pixel check, dead pixel finder, monitor test online, pixel defect test, screen diagnostics"
    },
    "color_test.html": {
        "title": "Color Test - Free Online Monitor Color Accuracy & Uniformity Test",
        "description": "Free online color test tool for monitors. Test color accuracy, color uniformity, and backlight consistency. Professional color testing with systematic color patterns.",
        "keywords": "color test, monitor color test, color accuracy test, color uniformity test, backlight test, color calibration, monitor color check, display color test, color quality test"
    },
    "cluster_test.html": {
        "title": "Cluster Test - Free Online Monitor Cluster Defect Detection",
        "description": "Free online cluster test tool for monitors. Detect cluster defects, uniformity issues using vertical stripes, horizontal stripes, and checkerboard patterns.",
        "keywords": "cluster test, monitor cluster test, cluster defect test, uniformity test, stripe pattern test, checkerboard test, display uniformity, monitor uniformity test"
    },
    "latency_test.html": {
        "title": "Latency Test - Free Online Monitor & Input Response Time Test",
        "description": "Free online latency test tool for monitors and input devices. Measure display latency and input response time with precise timing measurements.",
        "keywords": "latency test, monitor latency test, input latency test, response time test, display latency, input lag test, monitor response test, gaming latency test"
    },
    "view_angle.html": {
        "title": "View Angle Test - Free Online Monitor Viewing Angle & Color Consistency Test",
        "description": "Free online view angle test tool for monitors. Test viewing angles and color consistency from different positions. Professional angle testing.",
        "keywords": "view angle test, monitor view angle test, viewing angle test, color consistency test, monitor angle test, display angle test, viewing angle check"
    },
    "gradient_test.html": {
        "title": "Gradient Test - Free Online Monitor Gradient Rendering & Color Banding Test",
        "description": "Free online gradient test tool for monitors. Test gradient rendering quality and detect color banding issues. Professional gradient testing.",
        "keywords": "gradient test, monitor gradient test, color banding test, gradient rendering test, monitor gradient quality, display gradient test, color banding detection"
    },
    "gpu_stress_test.html": {
        "title": "GPU Stress Test - Free Online Graphics Card Performance Test",
        "description": "Free online GPU stress test tool. Test your graphics card performance in real time with 3D rendering. Professional GPU testing with FPS monitoring and performance analysis.",
        "keywords": "GPU stress test, graphics card test, GPU performance test, FPS test, graphics performance test, GPU benchmark, graphics card benchmark, GPU stress testing"
    },
    "touch_test.html": {
        "title": "Touch Screen Test - Free Online Touch Screen Functionality Test",
        "description": "Free online touch screen test tool. Test your device's touch screen functionality and multi-touch capabilities. Professional touch screen testing with drawing and touch counting.",
        "keywords": "touch screen test, touch test, multi-touch test, touch functionality test, touch screen check, touch screen diagnostic, touch accuracy test"
    },
    "inversion_test.html": {
        "title": "Inversion Test - Free Online Monitor Pixel Walk Detection",
        "description": "Free online inversion test tool for monitors. Test for inversion artifacts (pixel walk) with animated checkerboard patterns. Professional inversion testing.",
        "keywords": "inversion test, pixel walk test, monitor inversion test, display inversion test, checkerboard test, inversion artifacts test, pixel walk detection"
    },
    "image_retention_test.html": {
        "title": "Image Retention Test - Free Online Monitor Burn-in Detection",
        "description": "Free online image retention test tool for monitors. Test for image retention (burn-in) with static white rectangle and gray background. Professional retention testing.",
        "keywords": "image retention test, burn-in test, monitor retention test, display retention test, ghost image test, screen burn test, image retention detection"
    },
    "response_time_test.html": {
        "title": "Response Time Test - Free Online Monitor Ghosting Detection",
        "description": "Free online response time test tool for monitors. Test for response time and ghosting with moving rectangle animation. Professional ghosting detection.",
        "keywords": "response time test, ghosting test, monitor response time test, display ghosting test, motion blur test, monitor ghosting detection, response time measurement"
    },
    "pwm_flicker_test.html": {
        "title": "PWM Flicker Test - Free Online Monitor Flicker Detection",
        "description": "Free online PWM flicker test tool for monitors. Test for PWM flicker using rapid black and white flashing. Professional flicker testing with smartphone camera detection.",
        "keywords": "PWM flicker test, monitor flicker test, display flicker test, PWM test, flicker detection, monitor PWM test, screen flicker test, PWM flicker detection"
    },
    "touch_grid_test.html": {
        "title": "Touch Grid Test - Free Online Touch Screen Uniformity Test",
        "description": "Free online touch grid test tool for touch screens. Test touch screen uniformity by touching every cell in the grid. Professional touch screen testing.",
        "keywords": "touch grid test, touch screen test, touch uniformity test, touch screen grid test, touch screen uniformity, touch screen check, touch grid accuracy"
    },
    "screen_info.html": {
        "title": "Screen Information - Free Online Monitor and Display Information Tool",
        "description": "Free online screen information tool. Get detailed information about your monitor, display specifications, browser details, and system information. Professional display diagnostics.",
        "keywords": "screen information, monitor information, display specs, screen resolution, monitor details, display information, screen diagnostics, monitor specs"
    },
    "screen_info_simple.html": {
        "title": "Simple Screen Info - Free Online Basic Monitor Information Tool",
        "description": "Free online simple screen information tool. Get basic information about your monitor, display specifications, and system details. Quick display diagnostics.",
        "keywords": "screen information, monitor information, display specs, screen resolution, monitor details, display information, screen diagnostics, monitor specs"
    },
    "auth.html": {
        "title": "Monitor Test Tool - Free Online Display Diagnostics & GPU Performance Testing",
        "description": "Free online monitor test tool. Check dead pixels, screen resolution, GPU performance, color accuracy, and display quality. Professional display diagnostics for any monitor.",
        "keywords": "monitor test, dead pixel test, screen test, display test, GPU test, monitor diagnostics, screen resolution, color test, monitor quality"
    }
}

def generate_hreflang_tags(filename: str) -> str:
    """Generate hreflang tags for all supported languages"""
    languages = [
        "en", "ru", "es", "fr", "de", "it", "pt", "ja", "ko", "zh", "ar", "hi", "tr", 
        "nl", "pl", "sv", "fi", "no", "da", "cs", "hu", "ro", "bg", "hr", "sk", "sl", 
        "et", "lv", "lt", "el", "he", "th", "vi", "id", "ms", "fil", "uk", "be", "kk", 
        "uz", "ky", "tg", "mn", "ka", "hy", "az", "eu", "gl", "ca", "is", "mt", "cy", 
        "ga", "sq", "mk", "sr", "bs", "me"
    ]
    
    tags = []
    for lang in languages:
        if lang == "en":
            tags.append(f'    <link rel="alternate" hreflang="{lang}" href="{BASE_URL}/{filename}">')
        else:
            tags.append(f'    <link rel="alternate" hreflang="{lang}" href="{BASE_URL}/{filename}?lang={lang}">')
    
    tags.append(f'    <link rel="alternate" hreflang="x-default" href="{BASE_URL}/{filename}">')
    
    return "\n".join(tags)

def generate_structured_data(filename: str, seo_data: Dict) -> str:
    """Generate structured data JSON-LD for the page"""
    page_name = filename.replace('.html', '').replace('_', ' ').title()
    
    return f'''    <!-- Structured Data -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "{seo_data['title']}",
        "description": "{seo_data['description']}",
        "url": "{BASE_URL}/{filename}",
        "inLanguage": "en-US",
        "publisher": {{
            "@type": "Organization",
            "name": "Monitor Test Tool"
        }},
        "image": "{BASE_URL}/monitor-test-preview.jpg",
        "mainEntity": {{
            "@type": "SoftwareApplication",
            "name": "{page_name} Tool",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web Browser",
            "description": "{seo_data['description']}",
            "offers": {{
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            }}
        }},
        "breadcrumb": {{
            "@type": "BreadcrumbList",
            "itemListElement": [
                {{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "{BASE_URL}/dashboard.html"
                }},
                {{
                    "@type": "ListItem",
                    "position": 2,
                    "name": "{page_name}",
                    "item": "{BASE_URL}/{filename}"
                }}
            ]
        }}
    }}
    </script>'''

def update_html_file(filename: str):
    """Update SEO meta tags in an HTML file"""
    if filename not in SEO_DATA:
        print(f"Warning: No SEO data for {filename}")
        return
    
    print(f"Updating {filename}...")
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    seo_data = SEO_DATA[filename]
    
    # Update title
    content = re.sub(
        r'<title>.*?</title>',
        f'<title>{seo_data["title"]}</title>',
        content
    )
    
    # Update description
    content = re.sub(
        r'<meta name="description" content="[^"]*">',
        f'<meta name="description" content="{seo_data["description"]}">',
        content
    )
    
    # Update keywords
    content = re.sub(
        r'<meta name="keywords" content="[^"]*">',
        f'<meta name="keywords" content="{seo_data["keywords"]}">',
        content
    )
    
    # Update robots meta tag
    content = re.sub(
        r'<meta name="robots" content="[^"]*">',
        '<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">',
        content
    )
    
    # Update Open Graph tags
    content = re.sub(
        r'<meta property="og:url" content="[^"]*">',
        f'<meta property="og:url" content="{BASE_URL}/{filename}">',
        content
    )
    
    content = re.sub(
        r'<meta property="og:title" content="[^"]*">',
        f'<meta property="og:title" content="{seo_data["title"]}">',
        content
    )
    
    content = re.sub(
        r'<meta property="og:description" content="[^"]*">',
        f'<meta property="og:description" content="{seo_data["description"]}">',
        content
    )
    
    # Add missing Open Graph tags
    if 'og:image' not in content:
        og_tags = f'''    <meta property="og:image" content="{BASE_URL}/monitor-test-preview.jpg">
    <meta property="og:locale" content="en_US">
    <meta property="og:site_name" content="Monitor Test Tool">'''
        content = content.replace('<meta property="og:description"', f'{og_tags}\n    <meta property="og:description"')
    
    # Add Twitter Card tags if missing
    if 'twitter:card' not in content:
        twitter_tags = f'''    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{BASE_URL}/{filename}">
    <meta property="twitter:title" content="{seo_data["title"]}">
    <meta property="twitter:description" content="{seo_data["description"]}">
    <meta property="twitter:image" content="{BASE_URL}/monitor-test-preview.jpg">'''
        content = content.replace('<!-- Canonical URL -->', f'{twitter_tags}\n    <!-- Canonical URL -->')
    
    # Add favicon tags if missing
    if 'apple-touch-icon' not in content:
        favicon_tags = '''    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon.png">
    <link rel="shortcut icon" type="image/png" href="favicon.png">'''
        content = content.replace('<!-- Canonical URL -->', f'{favicon_tags}\n    <!-- Canonical URL -->')
    
    # Update canonical URL
    content = re.sub(
        r'<link rel="canonical" href="[^"]*">',
        f'<link rel="canonical" href="{BASE_URL}/{filename}">',
        content
    )
    
    # Add hreflang tags if missing
    if 'hreflang="en"' not in content:
        hreflang_tags = generate_hreflang_tags(filename)
        content = content.replace('<link rel="canonical"', f'{hreflang_tags}\n    <link rel="canonical"')
    
    # Update structured data
    structured_data = generate_structured_data(filename, seo_data)
    content = re.sub(
        r'<!-- Structured Data -->\s*<script type="application/ld\+json">.*?</script>',
        structured_data,
        content,
        flags=re.DOTALL
    )
    
    # Write updated content back to file
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Updated {filename}")

def main():
    """Main function to update all HTML files"""
    print("Starting SEO update for Monitor Test Tool...")
    print(f"Base URL: {BASE_URL}")
    print(f"Files to update: {len(HTML_FILES)}")
    print("-" * 50)
    
    for filename in HTML_FILES:
        if os.path.exists(filename):
            update_html_file(filename)
        else:
            print(f"Warning: File {filename} not found")
    
    print("-" * 50)
    print("SEO update completed!")
    print("\nNext steps:")
    print("1. Create monitor-test-preview.jpg (1200x630px) for social media")
    print("2. Submit sitemap to search engines")
    print("3. Add Google Analytics and Yandex.Metrika")
    print("4. Test all pages with Google Search Console")

if __name__ == "__main__":
    main() 