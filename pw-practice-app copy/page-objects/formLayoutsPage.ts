import {Locator, Page} from "@playwright/test";

export class FormLayoutsPage {
    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async submitUsingTheGridFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string){
        const usingTheGridForm = this.page.locator('nb-card', {hasText: "Using the Grid"})
        await usingTheGridForm.getByRole('textbox', {name: "Email"}).fill(email)
        await usingTheGridForm.getByRole('textbox', {name: "Password"}).fill(password)
        await usingTheGridForm.getByRole('radio', {name: optionText}).check({force: true})
        await usingTheGridForm.getByRole('button').click()
    }

    /**
     * This method fills in the Name Email and Checkbox
     * @param name - Firstname Lastname (ex. Woosung Kim)
     * @param email - Valid Email (ex. WKim@symcor.com)
     * @param rememberMe - Checkbox: true or false (ex. true)
     */
    async submitInlineFormWIthNameEmailAndCheckbox(name: string, email: string, rememberMe: boolean){
        const inLineForm = this.page.locator('nb-card', {hasText: "Inline form"})
        await inLineForm.getByRole('textbox', {name: "Jane Doe"}).fill(name)
        await inLineForm.getByRole('textbox', {name: "Email"}).fill(email)
        if (rememberMe)
            await inLineForm.getByRole('checkbox').check({force: true})
        await inLineForm.getByRole('button').click()
    }
}