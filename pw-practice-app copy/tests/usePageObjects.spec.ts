import {test, expect} from '@playwright/test'
import { NavigatePage } from '../page-objects/navigatePage'
import { FormLayoutsPage } from '../page-objects/formLayoutsPage'
import { DatePickerPage } from '../page-objects/datepickerPage'

test.beforeEach(async({page})=> {
    await page.goto('http://localhost:4200/')
})

test('navigate to form page', async ({page}) => {
    const navigateTo = new NavigatePage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.toastrPage()
    await navigateTo.tooltipPage()
})

test('parameterized methods', async ({page}) => {
    const navigateTo = new NavigatePage(page)
    const onFormLayoutsPage = new FormLayoutsPage(page)
    const onDatepickerPage = new DatePickerPage(page)

    await navigateTo.formLayoutsPage()
    await onFormLayoutsPage.submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 1')
    await onFormLayoutsPage.submitInlineFormWIthNameEmailAndCheckbox('John Doe', 'johndoe@testing.com', true)
    await navigateTo.datePickerPage()
    await onDatepickerPage.selectCommonFatePickerDateFromToday(10)
    await onDatepickerPage.selectDatepickerWithRangeFromToday(6, 15)
})

