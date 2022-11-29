export const phoneMask = (phone) => {
    const part1 = `+7 (${phone[0] || "_"}${phone[1] || "_"}${phone[2] || "_"})`
    const part2 = ` ${phone[3] || "_"}${phone[4] || "_"}${phone[5] || "_"}-`
    const part3 = `${phone[6] || "_"}${phone[7] || "_"}-${phone[8] || "_"}${phone[9] || "_"}`

    const result = phone ? `${part1}${part2}${part3}` : ''

    const lastNumber = result.match(/[0-9]/g)?.at(-1)
    const index = result.lastIndexOf(lastNumber)

    return `${part1}${part2}${part3}`.substring(0, index + 1)
}