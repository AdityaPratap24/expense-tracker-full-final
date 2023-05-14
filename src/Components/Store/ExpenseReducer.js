import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = { expenses: [], expensesAmount: 0 };

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialExpenseState,
  reducers: {
    deleteExpense: (state) => {},
    addExpense: (state, action) => {
      state.expenses = action.payload.itemsArray;
      state.expensesAmount = action.payload.expensesAmount;
    },
    
    editExpense: (state) => {},
  },
});

export const ExpenseActions = expenseSlice.actions;

export default expenseSlice.reducer;