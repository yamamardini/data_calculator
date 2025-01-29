// تحميل البيانات من LocalStorage أولًا، وإذا لم تكن موجودة نحمّلها من JSON
let products = JSON.parse(localStorage.getItem('products')) || []; // استخدام البيانات المخزنة في LocalStorage أو مصفوفة فارغة

// تحميل البيانات من ملف JSON إذا كانت البيانات غير موجودة في LocalStorage
fetch('data/products.json') // تأكد من وضع ملف JSON في مسار "data/products.json"
    .then(response => {
        if (!response.ok) {
            throw new Error('لم يتم العثور على ملف JSON!');
        }
        return response.json();
    })
    .then(data => {
        if (products.length === 0) { // إذا لم يكن هناك بيانات في LocalStorage
            products = data; // تحميل البيانات من JSON إلى المصفوفة
            localStorage.setItem('products', JSON.stringify(products)); // حفظ البيانات في LocalStorage
        }
        console.log('تم تحميل المنتجات:', products);
    })
    .catch(error => console.error('حدث خطأ أثناء تحميل ملف JSON:', error));

// إضافة منتج جديد أو تحديث الكمية إذا كان المنتج موجودًا
productForm.addEventListener('submit', function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند إرسال النموذج

    // الحصول على القيم من النموذج
    const qrCode = document.getElementById('my_input1').value;
    const name = document.getElementById('my_input2').value;
    const quantity = parseInt(document.getElementById('my_input3').value);
    const price = parseFloat(document.getElementById('my_input4').value);

    // البحث عن المنتج باستخدام QR Code
    const existingProduct = products.find(p => p.qrCode === qrCode);

    if (existingProduct) {
        // إذا كان المنتج موجودًا، قم بتحديث الكمية والسعر
        existingProduct.quantity += quantity;
        existingProduct.price = price;
        alert('Product quantity updated successfully!');
    } else {
        // إذا كان المنتج غير موجود، قم بإضافته
        const product = { qrCode, name, quantity, price };
        products.push(product);
        alert('The product has been saved successfully!');
    }

    // حفظ البيانات في Local Storage
    localStorage.setItem('products', JSON.stringify(products));

    // إعادة تعيين النموذج
    productForm.reset();
});

// استرجاع المنتج وطباعة الفاتورة
retrieveForm.addEventListener('submit', function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند إرسال النموذج

    const qrCode = document.getElementById('my_input5').value;
    const requestedQuantity = parseInt(document.getElementById('my_input6').value);

    const productIndex = products.findIndex(p => p.qrCode === qrCode);

    if (productIndex !== -1) {
        const product = products[productIndex];

        if (requestedQuantity <= product.quantity) {
            const totalPrice = product.price * requestedQuantity;

            // إنشاء الفاتورة
            const invoice = `
                <h2> Purchase invoice</h2>
                <p><strong>QR Code:</strong> ${product.qrCode}</p>
                <p><strong> Product Name:</strong> ${product.name}</p>
                <p><strong>Price per unit</strong> ${product.price} $</p>
                <p><strong> Quantity Required:</strong> ${requestedQuantity}</p>
                <p><strong>Total price :</strong> ${totalPrice} $</p>
            `;
            invoiceOutput.innerHTML = invoice;

            // تحديث الكمية
            product.quantity -= requestedQuantity;
            if (product.quantity <= 0) {
                products.splice(productIndex, 1); // حذف المنتج إذا انتهت الكمية
            }

            // حفظ التغييرات في Local Storage
            localStorage.setItem('products', JSON.stringify(products));
        } else {
            invoiceOutput.innerHTML = "<p style='color: red;'>The required quantity is not available.!</p>";
        }
    } else {
        invoiceOutput.innerHTML = "<p style='color: red;'>Product not found!</p>";
    }

    retrieveForm.reset();
});

// حذف جميع البيانات
button3.addEventListener('click', function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند الضغط على الزر

    products = []; // إفراغ المصفوفة
    localStorage.removeItem('products'); // حذف البيانات من Local Storage
    alert('All data has been deleted successfully.!');
    invoiceOutput.innerHTML = "";
});


const searchButton = document.getElementById('searchButton'); // زر البحث
const my_input7 = document.getElementById('my_input7'); // حقل الإدخال
const productDetails = document.getElementById('productDetails'); // العنصر الذي يعرض تفاصيل المنتج

searchButton.addEventListener('click', function () {
    const qrCode = my_input7.value.trim(); // الحصول على القيمة من حقل الإدخال

    // التحقق إذا كان QR Code موجود في المصفوفة
    const product = products.find(p => p.qrCode === qrCode);

    if (product) {
        // إذا كان المنتج موجودًا، عرض تفاصيله
        const productInfo = `
            <h3>تفاصيل المنتج:</h3>
            <p><strong>QR Code:</strong> ${product.qrCode}</p>
            <p><strong>Product Name:</strong> ${product.name}</p>
            <p><strong> Product Name:</strong> ${product.quantity}</p>
            <p><strong>price:</strong> ${product.price} $</p>
        `;
        productDetails.innerHTML = productInfo; // عرض التفاصيل في العنصر
    } else {
        // إذا لم يتم العثور على المنتج
        productDetails.innerHTML = "<p style='color: red;'>Product not found!</p>";
    }

    // إعادة تعيين حقل الإدخال
    my_input7.value = '';
});