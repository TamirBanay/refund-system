# Generated by Django 4.1.7 on 2023-05-06 14:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0027_alter_vouchers_dateofacquire_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vouchers',
            name='dateOfAcquire',
            field=models.DateTimeField(default=datetime.datetime(2023, 5, 6, 17, 54, 18, 953265)),
        ),
        migrations.AlterField(
            model_name='vouchers',
            name='dateOfExpiry',
            field=models.DateTimeField(default=datetime.datetime(2023, 5, 6, 17, 54, 18, 953265)),
        ),
    ]
