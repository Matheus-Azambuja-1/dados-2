import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async def verify():
        async with async_playwright() as p:
            browser = await p.chromium.launch()
            page = await browser.new_page(viewport={'width': 1280, 'height': 2000})
            
            url = "http://localhost:8080/index.html"
            await page.goto(url, wait_until="networkidle")

            # Click on the convenio tab
            await page.click("text='Visão por Convênio (Detalhe)'")
            await asyncio.sleep(1) # Wait for animations/rendering

            os.makedirs('verification/screenshots', exist_ok=True)
            await page.screenshot(path='verification/screenshots/final_convenio.png', full_page=True)
            print("Screenshot saved to verification/screenshots/final_convenio.png")
            
            await browser.close()

    await verify()

if __name__ == "__main__":
    asyncio.run(run())
