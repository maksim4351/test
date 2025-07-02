# Google Tag Manager Setup for Monitor Test Tool

## What's Already Done:

### 1. **Code Added to Pages:**
- ✅ `index.html` (main page)
- ✅ `screen_info.html` (screen information page)

### 2. **Added Code:**

#### In `<head>` of each page:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XCPZKJJ');</script>
<!-- End Google Tag Manager -->
```

#### In `<body>` of each page:
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5XCPZKJJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

## Setup in Google Tag Manager:

### 1. **Access GTM:**
- Go to https://tagmanager.google.com/
- Sign in with Google account
- Find container `GTM-5XCPZKJJ`

### 2. **Configure Tags for Tracking:**

#### Google Analytics 4 (GA4):
1. In GTM create a new tag
2. Select type "Google Analytics: GA4 Configuration"
3. Enter Measurement ID (get from GA4)
4. Configure trigger "All Pages"

#### Event Tracking:
Create tags for tracking:
- **Test button clicks** (Color Test, Dead Pixel Test, etc.)
- **Feedback form submission**
- **Screen information copying**
- **GPU performance testing**

### 3. **Configure Triggers:**

#### For tracking test clicks:
```javascript
// In GTM create Custom HTML tag:
<script>
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn') && e.target.href) {
    dataLayer.push({
      'event': 'test_click',
      'test_name': e.target.textContent,
      'test_url': e.target.href
    });
  }
});
</script>
```

#### For tracking feedback form:
```javascript
// In GTM create Custom HTML tag:
<script>
document.addEventListener('click', function(e) {
  if (e.target.id === 'sendFeedbackBtn') {
    dataLayer.push({
      'event': 'feedback_submit',
      'user_email': document.getElementById('userEmail').value
    });
  }
});
</script>
```

### 4. **Configure Variables:**

#### Custom Variables:
- **Page URL**: `{{Page URL}}`
- **Page Title**: `{{Page Title}}`
- **User Agent**: `{{User Agent}}`
- **Screen Resolution**: `{{Screen Resolution}}`

## What You Can Track:

### 1. **Basic Statistics:**
- Number of visitors
- Time on site
- Entry and exit pages
- Traffic sources

### 2. **User Behavior:**
- Which tests are popular
- How many people submit feedback
- What devices they use
- Visitor geography

### 3. **Technical Information:**
- Visitor screen resolutions
- Browsers and operating systems
- Page load speed
- JavaScript errors

## Testing the Setup:

### 1. **Check in GTM Preview:**
- Enable preview mode
- Open your website
- Verify that events are being sent

### 2. **Check in GA4:**
- Go to Real-time reports
- Ensure data is coming in
- Check events in real-time

### 3. **Check in Browser:**
- Open Developer Tools
- Go to Network tab
- Verify that GTM requests are being sent

## 📱 Mobile Analytics:

### Set up tracking for mobile devices:
- Touch gestures
- Screen orientation
- Mobile performance

## 🌍 International Analytics:

### Considering site multilingualism:
- Track language popularity
- Analyze behavior by countries
- Set up goals for different regions

---

**Result:** Now you can see detailed statistics of your website visits, understand user behavior, and optimize the site based on data! 