(function () {

    const CSS_CLASSES = {
        FIELD: '.main__result',
        INPUT: '.main__input',
        MAIN_CLASS: '.main__example',
        CONTROL_BUTTON: '.control .button',
        HIDDEN: '._hidden',
        ACTIVE: '._active',
        TODO_CONTAINER: '.todo__container',
        TODO_REMOVE_BUTTON: '.todo__remove-button'
    };
    const TODO_CLASS = {
        INPUT_CONTROL: 'todo__input-control',
        INPUT: 'todo__input',
        SUBMIT: 'todo__submit-button',
        LIST: 'todo__list',
        ITEM: 'todo__list-item',
        ITEM_NUMBER: 'todo__list-number',
        TASK: 'todo__list-task',
        REMOVE_BUTTON: 'todo__remove-button'

    };
    const MODIFIER = {
        HIDDEN: '_hidden',
        ACTIVE: '_active'
    };

    const tasks = document.querySelectorAll(CSS_CLASSES.MAIN_CLASS);
    const controlButtons = document.querySelectorAll(CSS_CLASSES.CONTROL_BUTTON);
    const todoContainer = document.querySelector(CSS_CLASSES.TODO_CONTAINER);

    initToDo();
    addInputEventListener();
    addControlEventListeners();

    function addInputEventListener() {
        const input = document.querySelector(CSS_CLASSES.INPUT);
        const target = document.querySelector(CSS_CLASSES.FIELD);

        input.addEventListener('input', () => {
            target.innerHTML = input.value;
        });
    }

    function addControlEventListeners() {
        controlButtons.forEach(element => element.addEventListener('click', selectNewTask))
    }

    function selectNewTask(event) {
        const target = event.target;

        if (target.classList.contains(MODIFIER.ACTIVE)) {
            return;
        }

        controlButtons.forEach(element => element.classList.remove(MODIFIER.ACTIVE));
        target.classList.add(MODIFIER.ACTIVE);
        showTaskByIndex(target.getAttribute('data'));
    }

    function showTaskByIndex(index) {
        tasks.forEach(element => {
            if (!element.classList.contains(MODIFIER.HIDDEN)) {
                element.classList.add(MODIFIER.HIDDEN);
            }
        });

        tasks.item(index).classList.remove(MODIFIER.HIDDEN);
    }

    function initToDo() {
        let taskArray = [];
        const {toDoInput, toDoAddButton} = createControl();
        const toDoList = createList();

        function createControl() {
            const toDoControl = document.createElement('div');
            const toDoInput = document.createElement('input');
            const toDoAddButton = document.createElement('input');

            toDoInput.classList.add(TODO_CLASS.INPUT);
            toDoControl.classList.add(TODO_CLASS.INPUT_CONTROL);
            toDoAddButton.classList.add(TODO_CLASS.SUBMIT);

            toDoAddButton.setAttribute('type', 'button');
            toDoAddButton.setAttribute('value', 'add');

            toDoControl.appendChild(toDoInput);
            toDoControl.appendChild(toDoAddButton);

            todoContainer.appendChild(toDoControl);

            return {toDoInput, toDoAddButton}
        }

        function createList() {
            const toDoListContainer = document.createElement('div');
            const toDoList = document.createElement('ol');

            toDoListContainer.classList.add(TODO_CLASS.LIST);
            toDoListContainer.appendChild(toDoList);
            todoContainer.appendChild(toDoListContainer);

            return toDoList;
        }

        function createTask(taskData) {
            if (!taskData) {
                return;
            }

            taskArray.push(taskData);
            renderTasks();
        }

        function renderTasks() {
            const tasks = [];
            toDoList.innerHTML = '';

            taskArray.forEach((task, index) => {
                const taskItem = document.createElement('li');
                const itemNumber = document.createElement('span');
                const taskText = document.createElement('span');
                const removeButton = document.createElement('input');

                taskItem.classList.add(TODO_CLASS.ITEM);
                itemNumber.classList.add(TODO_CLASS.ITEM_NUMBER);
                taskText.classList.add(TODO_CLASS.TASK);
                removeButton.classList.add(TODO_CLASS.REMOVE_BUTTON);
                itemNumber.innerHTML = `${index + 1}`;
                taskText.innerHTML = task;

                removeButton.setAttribute('data', `${index}`);
                removeButton.setAttribute('type', 'button');
                removeButton.setAttribute('value', 'remove');

                taskItem.appendChild(itemNumber);
                taskItem.appendChild(taskText);
                taskItem.appendChild(removeButton);

                tasks.push(taskItem)
            });

            tasks.forEach(element => {
                toDoList.appendChild(element);
                addRemoveListener(element);
            });

        }

        function addRemoveListener(element) {
            const removeButtons = element.querySelector(CSS_CLASSES.TODO_REMOVE_BUTTON);
            removeButtons.addEventListener('click', removeItem)
        }

        function removeItem(event) {
            const itemIndex = event.target.getAttribute('data');
            taskArray = taskArray.filter((element, index) => index !== parseInt(itemIndex));
            renderTasks();
        }



        toDoAddButton.addEventListener('click', () => createTask(toDoInput.value));
    }
})();