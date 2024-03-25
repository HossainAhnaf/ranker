import { createSlice } from "@reduxjs/toolkit";

const challengesSectionNavSlice = createSlice({
  name: "challengesSectionNav",
  initialState: {
    isChallengesSectionNavInvisible: false,
    isFilterOptionActive: false
  },
  reducers: {
    showChallengesSectionExtraNav(state) {
      state.isChallengesSectionNavInvisible = true
    },
    hideChallengesSectionExtraNav(state) {
      state.isChallengesSectionNavInvisible = false
    },

    showFilterOption(state) {
      state.isFilterOptionActive = true
    },
    hideFilterOption(state) {
      state.isFilterOptionActive = false
    }
  }

})
export const { showChallengesSectionExtraNav, hideChallengesSectionExtraNav, showFilterOption, hideFilterOption } = challengesSectionNavSlice.actions
export default challengesSectionNavSlice.reducer;