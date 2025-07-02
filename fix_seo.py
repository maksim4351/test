#!/usr/bin/env python3
"""
Simple SEO Fix Script
Fixes placeholder URLs and adds missing SEO tags
"""

import re

def fix_file(filename):
    print(f"Fixing {filename}...")
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix placeholder URLs
    content = content.replace('https://your-github-username.github.io/your-repo-name/', 'https://maksim4351.github.io/test/')
    
    # Add missing Twitter tags if not present
    if 'twitter:card' not in content:
        twitter_tags = '''    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://maksim4351.github.io/test/''' + filename + '''">
    <meta property="twitter:title" content="Monitor Test Tool - Free Online Display Diagnostics & GPU Performance Testing">
    <meta property="twitter:description" content="Free online monitor test tool. Check dead pixels, screen resolution, GPU performance, color accuracy, and display quality. Professional display diagnostics for any monitor.">
    <meta property="twitter:image" content="https://maksim4351.github.io/test/monitor-test-preview.jpg">'''
        
        # Insert after Open Graph tags
        content = content.replace('<!-- Canonical URL -->', f'{twitter_tags}\n    <!-- Canonical URL -->')
    
    # Add missing favicon tags if not present
    if 'apple-touch-icon' not in content:
        favicon_tags = '''    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon.png">
    <link rel="shortcut icon" type="image/png" href="favicon.png">'''
        
        content = content.replace('<!-- Canonical URL -->', f'{favicon_tags}\n    <!-- Canonical URL -->')
    
    # Add missing Open Graph tags
    if 'og:image' not in content:
        og_tags = '''    <meta property="og:image" content="https://maksim4351.github.io/test/monitor-test-preview.jpg">
    <meta property="og:locale" content="en_US">
    <meta property="og:site_name" content="Monitor Test Tool">'''
        
        content = content.replace('<meta property="og:description"', f'{og_tags}\n    <meta property="og:description"')
    
    # Update robots meta tag
    content = re.sub(
        r'<meta name="robots" content="[^"]*">',
        '<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">',
        content
    )
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Fixed {filename}")

# Files that need fixing
files_to_fix = [
    "auth.html",
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
    "screen_info_simple.html"
]

for filename in files_to_fix:
    try:
        fix_file(filename)
    except Exception as e:
        print(f"Error fixing {filename}: {e}")

print("SEO fixes completed!") 