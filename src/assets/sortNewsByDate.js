
export const sortNewsByDate = (news) => [...news]?.sort((a, b) => new Date(b.date) - new Date(a.date)) 