# Generated by Django 3.1.4 on 2020-12-03 23:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0004_auto_20201201_1952'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='finalcsv',
            name='id',
        ),
        migrations.AlterField(
            model_name='finalcsv',
            name='ticker',
            field=models.CharField(max_length=100, primary_key=True, serialize=False),
        ),
    ]
