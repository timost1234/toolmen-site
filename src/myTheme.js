export default {
    badge: {
        primary: 'text-blue-700 bg-blue-100 dark:text-white dark:bg-blue-600'
      },
  
      textarea: {
        base: 'block w-full text-sm dark:text-gray-300 form-textarea focus:outline-none',
        active:
          'focus:border-blue-400 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:shadow-outline-gray focus:shadow-outline-blue',
        disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
        valid:
          'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green',
        invalid:
          'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red',
      },
  
      select: {
        base: 'block w-full text-sm dark:text-gray-300 focus:outline-none',
        active:
          'focus:border-blue-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-blue dark:focus:shadow-outline-gray dark:focus:border-gray-600',
        select: 'form-select leading-5',
        multiple: 'form-multiselect',
        disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
        valid:
          'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green',
        invalid:
          'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red',
      },
  
      input: {
        base: 'block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5',
        active:
          'focus:border-blue-400 dark:border-gray-600 focus:shadow-outline-blue dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700',
        disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
        valid:
          'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green',
        invalid:
          'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red',
        radio:
          'text-blue-600 form-radio focus:border-blue-400 focus:outline-none focus:shadow-outline-blue dark:focus:shadow-outline-gray',
        checkbox:
          'text-blue-600 form-checkbox focus:border-blue-400 focus:outline-none focus:shadow-outline-blue dark:focus:shadow-outline-gray',
      },
  
      button: {
        primary: {
          base: 'text-white bg-blue-600 border border-transparent',
          active: 'active:bg-blue-600 hover:bg-blue-700 focus:shadow-outline-blue',
          disabled: 'opacity-50 cursor-not-allowed',
        },
      },
}