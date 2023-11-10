import {
  corporateOrSME,
  scaleupOrInvestor,
  startupOrEntrepreneur,
  foreignAssociates,
  generalUserType,
  engineering,
  highTech,
  healthtech,
  otherIndustries,
  allIndustries,
} from './const/ids'

export const filterHelper = (morePosts, tags, category) => {
  const resultTags = morePosts.map((item) => {
    let exist = false
    if (tags) {
      item.tag.filter((val) => {
        if (val?._ref === tags) {
          exist = true
          return
        }
      })
      return { ...item, selected: exist }
    } else {
      item.category.filter((val) => {
        if (val?._ref === category) {
          exist = true
          return
        }
      })
      return { ...item, selected: exist }
    }
  })

  return resultTags.filter((item) => item.selected === true)
}

export const generalTags = (generalSelected, posts) => {
  let generalTags

  if (Number(generalSelected) === 0) {
    generalTags = filterHelper(posts, corporateOrSME)
  } else if (Number(generalSelected) === 1) {
    generalTags = filterHelper(posts, scaleupOrInvestor)
  } else if (Number(generalSelected) === 2) {
    generalTags = filterHelper(posts, startupOrEntrepreneur)
  } else if (Number(generalSelected) === 3) {
    generalTags = filterHelper(posts, foreignAssociates)
  } else {
    generalTags = filterHelper(posts, generalUserType)
  }

  return generalTags
}

export const industryTags = (industrySelected, posts) => {
  let industryTags

  if (Number(industrySelected) === 0) {
    industryTags = filterHelper(posts, engineering)
  } else if (Number(industrySelected) === 1) {
    industryTags = filterHelper(posts, highTech)
  } else if (Number(industrySelected) === 2) {
    industryTags = filterHelper(posts, healthtech)
  } else if (Number(industrySelected) === 3) {
    industryTags = filterHelper(posts, otherIndustries)
  } else {
    industryTags = filterHelper(posts, allIndustries)
  }

  return industryTags
}

export const filterByPerson = (morePosts, name) => {
  return morePosts.filter((item) => item?.author?.name === name)
}
