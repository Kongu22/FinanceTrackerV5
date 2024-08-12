// src/translations.js
const translations = {
  en: {
    financeTracker: 'Finance Tracker',
    addTransaction: 'Add Transaction',
    currentBalance: 'Current Balance',
    setNewBalance: 'Set new balance',
    updateBalance: 'Update Balance',
    income: 'Income',
    expenses: 'Expenses',
    monthlySummary: 'Monthly Summary',
    description: 'Description',
    amount: 'Amount',
    date: 'Date',
    type: 'Type',
    category: 'Category',
    allCategories: 'All Categories',
    allTypes: 'All Types',
    transactionAdded: 'Transaction added successfully!',
    transactionDeleted: 'Transaction deleted',
    deleteConfirmation: 'Are you sure you want to delete this transaction?',
    deleteAllData: 'Delete All Data', // Added for clearing all data
    exportCSV: 'Export as CSV',
    applyFilters: 'Apply Filters',
    categories: {
      food: 'Food',
      rent: 'Rent',
      utilities: 'Utilities',
      entertainment: 'Entertainment',
      transport: 'Transport',
      health: 'Health',
      misc: 'Misc',
      salary: 'Salary',
      bonus: 'Bonus',
      other: 'Other',
      shopping: 'Shopping',    // New Category
      education: 'Education',  // New Category
      travel: 'Travel',        // New Category
      bills: 'Bills',          // New Category
    },
    saveUpdated: 'Save Updated',
    exit: 'Exit',
    // New translations for recurring feature
    recurringCheckboxLabel: 'Make this a recurring transaction',
    recurringTransaction: 'Recurring Transaction',
    recurringDescription: 'Recurring Description',
    recurringAmount: 'Recurring Amount',
    recurringDay: 'Recurring Day',
    recurringTooltip: 'Recurring Transaction',
    // New translations for transaction table columns
    timestamp: 'Timestamp',
    actions: 'Actions',
    recurring: 'Recurring',
    // Translations for months
    months: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    // Translations for budget notifications
    closeToBudgetLimit: 'You are close to the budget limit',
    budgetExceeded: 'Budget exceeded!',
    budgetLimit: 'Budget Limit',
    // Translations for password protection
    setNewPassword: 'Set new 4-character password',
    enterPassword: 'Enter your password',
    passwordSetSuccessfully: 'Password set successfully!',
    passwordFourChars: 'Password must be 4 characters long.',
    welcomeBack: 'Welcome back!',
    incorrectPassword: 'Incorrect password.',
    login: 'Login',
    setPassword: 'Set Password',
  },
  ru: {
    financeTracker: 'Трекер финансов',
    addTransaction: 'Добавить транзакцию',
    currentBalance: 'Текущий баланс',
    setNewBalance: 'Установить новый баланс',
    updateBalance: 'Обновить баланс',
    income: 'Доход',
    expenses: 'Расходы',
    monthlySummary: 'Ежемесячный отчет',
    description: 'Описание',
    amount: 'Сумма',
    date: 'Дата',
    type: 'Тип',
    category: 'Категория',
    allCategories: 'Все категории',
    allTypes: 'Все типы',
    transactionAdded: 'Транзакция успешно добавлена!',
    transactionDeleted: 'Транзакция удалена',
    deleteConfirmation: 'Вы уверены, что хотите удалить эту транзакцию?',
    deleteAllData: 'Удалить все данные', // Added for clearing all data
    exportCSV: 'Экспорт в CSV',
    applyFilters: 'Применить фильтры',
    categories: {
      food: 'Еда',
      rent: 'Аренда',
      utilities: 'Коммунальные услуги',
      entertainment: 'Развлечения',
      transport: 'Транспорт',
      health: 'Здоровье',
      misc: 'Разное',
      salary: 'Зарплата',
      bonus: 'Бонус',
      other: 'Другое',
      shopping: 'Покупки',      // New Category
      education: 'Образование', // New Category
      travel: 'Путешествия',    // New Category
      bills: 'Счета',           // New Category
    },
    saveUpdated: 'Сохранить изменения',
    exit: 'Выйти',
    // New translations for recurring feature
    recurringCheckboxLabel: 'Сделать эту транзакцию повторяющейся',
    recurringTransaction: 'Повторяющаяся транзакция',
    recurringDescription: 'Описание повторения',
    recurringAmount: 'Сумма повторения',
    recurringDay: 'День повторения',
    recurringTooltip: 'Повторяющаяся транзакция',
    // New translations for transaction table columns
    timestamp: 'Метка времени',
    actions: 'Действия',
    recurring: 'Повтор',
    // Translations for months
    months: [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    // Translations for budget notifications
    closeToBudgetLimit: 'Вы близки к лимиту бюджета',
    budgetExceeded: 'Бюджет превышен!',
    budgetLimit: 'Лимит бюджета',
    // Translations for password protection
    setNewPassword: 'Установите новый пароль из 4 символов',
    enterPassword: 'Введите ваш пароль',
    passwordSetSuccessfully: 'Пароль успешно установлен!',
    passwordFourChars: 'Пароль должен содержать 4 символа.',
    welcomeBack: 'Добро пожаловать обратно!',
    incorrectPassword: 'Неверный пароль.',
    login: 'Войти',
    setPassword: 'Установить пароль',
  },
  he: {
    financeTracker: 'מעקב פיננסי',
    addTransaction: 'הוסף עסקה',
    currentBalance: 'יתרה נוכחית',
    setNewBalance: 'הגדר יתרה חדשה',
    updateBalance: 'עדכן יתרה',
    income: 'הכנסות',
    expenses: 'הוצאות',
    monthlySummary: 'סיכום חודשי',
    description: 'תיאור',
    amount: 'סכום',
    date: 'תאריך',
    type: 'סוג',
    category: 'קטגוריה',
    allCategories: 'כל הקטגוריות',
    allTypes: 'כל הסוגים',
    transactionAdded: 'העסקה נוספה בהצלחה!',
    transactionDeleted: 'העסקה נמחקה',
    deleteConfirmation: 'האם אתה בטוח שברצונך למחוק עסקה זו?',
    deleteAllData: 'מחק את כל הנתונים', // Added for clearing all data
    exportCSV: 'ייצוא ל-CSV',
    applyFilters: 'החל מסננים',
    categories: {
      food: 'אוכל',
      rent: 'שכירות',
      utilities: 'שירותים',
      entertainment: 'בידור',
      transport: 'תחבורה',
      health: 'בריאות',
      misc: 'שונות',
      salary: 'שכר',
      bonus: 'בונוס',
      other: 'אחר',
      shopping: 'קניות',       // New Category
      education: 'חינוך',      // New Category
      travel: 'נסיעות',        // New Category
      bills: 'חשבונות',        // New Category
    },
    saveUpdated: 'שמור מעודכן',
    exit: 'יציאה',
    // New translations for recurring feature
    recurringCheckboxLabel: 'הפוך עסקה זו לחוזרת',
    recurringTransaction: 'עסקה חוזרת',
    recurringDescription: 'תיאור חוזר',
    recurringAmount: 'סכום חוזר',
    recurringDay: 'יום חוזר',
    recurringTooltip: 'עסקה חוזרת',
    // New translations for transaction table columns
    timestamp: 'חותמת זמן',
    actions: 'פעולות',
    recurring: 'חוזר',
    // Translations for months
    months: [
      'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
      'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
    ],
    // Translations for budget notifications
    closeToBudgetLimit: 'אתה קרוב למגבלת התקציב',
    budgetExceeded: 'התקציב חרג!',
    budgetLimit: 'מגבלת תקציב',
    // Translations for password protection
    setNewPassword: 'הגדר סיסמה חדשה בת 4 תווים',
    enterPassword: 'הזן את הסיסמה שלך',
    passwordSetSuccessfully: 'הסיסמה הוגדרה בהצלחה!',
    passwordFourChars: 'הסיסמה חייבת להכיל 4 תווים.',
    welcomeBack: 'ברוך הבא!',
    incorrectPassword: 'סיסמה שגויה.',
    login: 'התחבר',
    setPassword: 'הגדר סיסמה',
  },
};

export default translations;
