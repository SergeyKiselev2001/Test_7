export const validateForm = ({ name, phone, email }) => {
    if (!name){
      return { error: 'Введите имя' }
    }

    if (!/[0-9]{10}/.test(phone)){
        return { error: 'Введите корректный номер телефона' }
    }

    if (!/^\S+@\S+\.\S+$/.test(email)){
        return { error: 'Введите правильную почту' }
    }

    return true
}