# Generated by Django 4.0.5 on 2024-03-07 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calories', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fooditem',
            name='quantity',
            field=models.CharField(max_length=5),
        ),
    ]
