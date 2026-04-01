import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async def verify():
        async with async_playwright() as p:
            browser = await p.chromium.launch()
            page = await browser.new_page(viewport={'width': 1280, 'height': 2000})
            
            # Use the already running server or start a new one if needed
            # Assuming port 8080 is used
            url = "http://localhost:8080/index.html"
            try:
                await page.goto(url, wait_until="networkidle")
            except:
                print("Server might not be running on 8080. Check or start it.")
                return

            # Take screenshot of Visão Geral
            os.makedirs('verification/screenshots', exist_ok=True)
            await page.screenshot(path='verification/screenshots/final_geral.png', full_page=True)
            print("Screenshot saved to verification/screenshots/final_geral.png")
            
            await browser.close()

    await verify()

if __name__ == "__main__":
    asyncio.run(run())
