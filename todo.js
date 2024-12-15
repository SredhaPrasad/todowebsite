const todoContainer = document.getElementById('todoList');
        let completedCount = 0;

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(todos => {
                todos.slice(0, 20).forEach(todo => {
                    const todoItem = document.createElement('div');
                    todoItem.className = 'col-md-6 mb-2';
                    todoItem.innerHTML = `
                        <div class="card">
                            <div class="card-body">
                                <input type="checkbox" class="mr-2" ${todo.completed ? 'checked disabled' : ''}>
                                <span>${todo.title}</span>
                            </div>
                        </div>`;

                    const checkbox = todoItem.querySelector('input');
                    checkbox.addEventListener('change', () => {
                        if (checkbox.checked) {
                            completedCount++;
                            if (completedCount === 5) {
                                showCongrats();
                            }
                        } else {
                            completedCount--;
                        }
                    });

                    todoContainer.appendChild(todoItem);
                });
            });

        function showCongrats() {
            return new Promise(resolve => {
                alert('Congrats. 5 Tasks have been Successfully Completed');
                resolve();
            });
        }

        // Logout functionality
        document.querySelector('a[href="login.html"]').addEventListener('click', function () {
            window.location.href = 'index.html';
        });
  