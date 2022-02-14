# Test Data builders: an alternative to the Object Mother pattern

If you are strict about your use of constructors and immutable value objects, constructing objects in a valid state can be a bit of(um pouco de) a chore(uma tarefa).

Usually(geralmente) in application code, such(tais) objects are constructed(construídos) in few places and all the information required by the constructor is at hand(está a mão), having been(tendo sido) provided by user input, obtained from a database query or received in a message for example. In tests, on the other hand(por outro lado), you have to provide all those(esses) constructor arguments every time you want to create an object, whether(se) to test its behaviour or to create a value to use as input to the code being tested.

```java
Invoice invoice = new Invoice(
    new Recipient(
        "Sherlock Holmes",
        new Adress(
            "221b Baker Street", "London",
            new PostCode("NW1", "3RX")
        )
    ),

    new InvoiceLines(
        new InvoiceLine(
            "Deerstalker Hat",
            new PoundsShillingsPence(0, 3, 10)
        ),

        new InvoiceLine(
            "Tweed Cape",
            new PoundsShillingsPence(0, 4, 12)
        )
    )
);
```
